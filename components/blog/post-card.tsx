import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

function PostCard(
  props: React.ComponentPropsWithoutRef<typeof Card> & { thumbnail?: string }
) {
  return (
    <Card {...props}>
      <CardHeader className={cn("flex flex-col gap-y-2")}>
        {props.thumbnail ? (
          <Image
            src="/Icons/noThumbnail"
            width={1080}
            height={720}
            alt="Thumbnail"
            className="rounded-md object-cover w-full"
          />
        ) : (
          <Icons.noThumbnail />
        )}

        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          {props?.content?.length! > 100 ? (
            <>{props?.content?.slice(0, 100)}...</>
          ) : (
            <>{props.content}</>
          )}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href="#">Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
