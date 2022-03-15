import axios from "axios";
import React, { useCallback } from "react";
import CameraIcon from "../icons/CameraIcon";

const UploadComponent = ({
  setLoading,
}: {
  setLoading: (config: boolean) => void;
}) => {
  const onUploadFile = useCallback(
    async (e) => {
      setLoading(true);

      // 해당 유저 프로필 사진 저장
      const uploaded = await Promise.all(
        Object.entries(e.target.files).map((file) =>
          axios
            .post("/users/profile", {
              file: file[1],
              // path: folder,
            })
            .catch((error) => {
              console.error(error.response.data);
            })
            .finally(() => setLoading(false))
        )
      );
    },
    [setLoading]
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
};

export default UploadComponent;
