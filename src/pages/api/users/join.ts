import { ResponseType } from "@/types/axiosType";
import bcrypt from "bcryptjs";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import { payload } from "./../../../../libs/index";

const nodemailer = require("nodemailer");
const mailConfig = {
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { nickname, password, phone, email } = req.body;

  const user = phone ? { phone } : { email };
  if (email) {
    const existUser = await client.user.findUnique({
      where: {
        email,
      },
    });

    // 유저가 존재하지 않는 경우 토큰과 함께 생성
    if (!existUser) {
      console.log("Did not find.. so will create");

      // 비밀번호 암호화
      const hashedPassword = bcrypt.hashSync(password, 8);

      await client.token.create({
        data: {
          payload,
          user: {
            connectOrCreate: {
              where: {
                ...user,
              },
              create: {
                email,
                password: hashedPassword,
                phone,
                nickname: nickname
                  ? nickname
                  : Math.random().toString(36).substring(2, 11),
              },
            },
          },
        },
      });

      const twilioClient = twilio(
        process.env.TWILIO_SID,
        process.env.TWILIO_TOKEN
      );

      await twilioClient.messages.create({
        messagingServiceSid: process.env.TWILIO_MS_SID,

        // twillo가 트라이얼 version이기 때문에 내 번호로 전송
        to: 82 + process.env.MY_PHONE!,
        body: `Your login token is ${payload}`,
      });

      let message = {
        from: process.env.MAIL_EMAIL,
        to: "hm_stom@naver.com",
        subject: "이메일 인증 요청 메일입니다.",
        html: "<p> zzi9 이메일 인증 메일입니다.! </p>",
      };

      let transporter = nodemailer.createTransport(mailConfig);
      transporter.sendMail(message);
    }

    // 이미 존재하는 유저라면 에러 뱉기
    else {
      return res.status(400).json({
        ok: false,
        message: "이미 존재하는 유저입니다.",
      });
    }
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
