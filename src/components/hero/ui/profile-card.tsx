'use client';

import Link from 'next/link';
import { Card3D, CardItem } from '~/components/ui/3d-card';
import { AnimatedTooltip } from '~/components/ui/animated-tooltip';
import { BackgroundGradient } from '~/components/ui/background-gradient';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { profileCard } from '../data';

export function ProfileCard() {
  return (
    <div className="hidden grow basis-1 justify-center lg:flex">
      <BackgroundGradient containerClassName="w-fit">
        <Card3D containerClassName="py-0">
          <div className="group/card flex flex-col rounded-[22px] bg-card p-6 shadow-[-5px_-3px_#ffffff17_inset] transition-all duration-300 hover:shadow-[-2px_-2px_#ffffff17_inset]">
            <CardItem
              translateZ="100"
              className="flex w-full gap-5 rounded-xl transition-all group-hover/card:shadow-lg"
            >
              <Card className="w-full shadow-[-2px_-1px_#ffffff16_inset] backdrop-blur-lg transition-all group-hover/card:shadow-[-1px_-1px_#ffffff16_inset] group-hover/card:drop-shadow-[5px_10px_10px_#17343e1c]">
                <CardHeader className="flex-row items-center gap-10 border-b border-secondary p-4">
                  <AnimatedTooltip
                    items={[
                      {
                        id: 1,
                        name: profileCard.tooltip.title,
                        designation: profileCard.tooltip.subTitle,
                        image: profileCard.tooltip.imagePath,
                      },
                    ]}
                  />
                  <div className="flex flex-col">
                    <CardTitle>{profileCard.title}</CardTitle>
                    <CardDescription>{profileCard.subTitle}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p>{profileCard.body}</p>
                </CardContent>
              </Card>
            </CardItem>
            <CardItem
              translateZ="150"
              className="mt-auto flex w-full gap-5 rounded-xl"
            >
              <div className="flex w-full gap-5">
                {profileCard.socialUrls.map((social) => (
                  <Link
                    key={social.url}
                    className="group inline-block"
                    target="_blank"
                    href={social.url}
                  >
                    <Button className="shadow-[-2px_-2px_#00000069_inset] transition-all group-hover/card:shadow-[-1px_-1px_#00000069_inset]">
                      {social.icon}
                    </Button>
                  </Link>
                ))}
              </div>
            </CardItem>
          </div>
        </Card3D>
      </BackgroundGradient>
    </div>
  );
}
