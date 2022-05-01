import axios from "axios";
import React, { useCallback } from "react";
import { Resource } from "src/models/dto/api-response";
import CameraIcon from "../icons/CameraIcon";

interface UploadProps {
  setLoading: (config: boolean) => void;
  folder: string;
  onUploadImage: (e: Resource[]) => void;
}

function UploadComponent({ setLoading, folder, onUploadImage }: UploadProps) {
  const onUploadFile = useCallback(
    async (e) => {
      setLoading(true);

      // 해당 유저 프로필 사진 저장
      await Promise.all(
        Object.entries(e.target.files).map((file) =>
          axios
            .post("/users/profile", {
              file: file[1],
              path: folder,
            })
            .then((data: any) => {
              onUploadImage(data);
            })
            .catch((error) => {
              console.error(error.response.data);
            })
            .finally(() => setLoading(false))
        )
      );
    },
    [setLoading, onUploadImage, folder]
  );

  return (
    <form>
      <label className="flex items-center justify-center">
        <div className="absolute top-7 left-[53%] z-100 bg-white border rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
          <CameraIcon />
        </div>
        <input
          id="file"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={onUploadFile}
          multiple={false}
        />
      </label>
    </form>
  );
}

export default UploadComponent;
