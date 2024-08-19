"use client";
 
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  avatarUrls: string[];
}

export default function AvatarCircles({ className, avatarUrls }: AvatarCirclesProps) {
    return (
        <div>
          {
            avatarUrls.length === 0 ? (
              <div className="w-10 h-10 rounded-full bg-neutral-300 flex items-center justify-center font-bold text-xs">
                NN
              </div>
            ) : (
              <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
                {
                  avatarUrls.slice(0, 1).map((url, index) => (
                    <Image
                        key={index}
                        className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                        src={url}
                        width={40}
                        height={40}
                        alt={`Avatar ${index + 1}`}
                    />
                  ))
                } 
              </div>
            )
          }
          
        </div>
      );
}
