import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const profileVariants = cva(
  "flex items-center justify-center overflow-hidden rounded-full",
  {
    variants: {
      size: {
        small: "w-[44px] h-[44px]",
        medium: "w-[100px] h-[100px]",
        large: "w-[120px] h-[120px]",
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
);

interface ProfileProps
    extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof profileVariants> {
        imgUrl?: string; // 서버에서 받아온 이미지 URL
}

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(({ imgUrl, size, className, ...props }, ref) => {
    const defaultImage = "/profile.png"; // 기본 이미지 경로

    return (
        <div
            className={profileVariants({
            size,
            className,
            })}
            ref={ref}
            {...props}
        >
        <img
            src={imgUrl || defaultImage}
            alt="Profile"
            className="w-full h-full object-cover"
        />
        </div>
    );
    }
);

Profile.displayName = "Profile";
