import React, { useMemo, useState } from "react";

const ProfileInfoComponent = () => {
  const [loading, setLoading] = useState(false);

  const image = useMemo(() => {
    // 프로필 업로드 중일 때
    if (loading) return;
    //   입력받은 프로필 사진
    else return <img className="h-[56px]" src="" alt="프로필 이미지" />;

    //   기본 프로필 사진
  }, [loading]);
  return (
    <div>
      <div>
        {/* profile image */}
        <div className="border-4 border-blue-600 rounded-full flex items-center justify-center overflow-hidden">
          <div>{image}</div>
        </div>
        {/* nickname */}
        <div className="w-1/2">
          <input
            type="text"
            className="border-0 border-b-2 rounded-0 px-4 py-2"
            placeholder="닉네임"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoComponent;
