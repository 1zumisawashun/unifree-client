import { UnstyledButtonAnchor } from "@/components/buttons";
import { FlexWrapper } from "@/components/elements/FlexWrapper";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { NextJsIcon } from "@/components/elements/SvgIcon";
import { ProfileMenu } from "@/components/layouts/ProfileMenu";
import { prisma } from "@/functions/libs/prisma";
import { zVersion } from "@/functions/models/Settings";
import { Suspense } from "react";
import "server-only";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <header className={styles["header"]}>
        <UnstyledButtonAnchor
          href="/"
          className={styles["link-logo-wrapper"]}
          aria-label="logo"
        >
          <NextJsIcon />
          Awesome Note App
        </UnstyledButtonAnchor>

        <FlexWrapper>
          <span className={styles["version-item"]}>
            <Suspense fallback={<LoadingDot />}>
              <Version />
            </Suspense>
          </span>
          <ProfileMenu />
        </FlexWrapper>
      </header>
    </div>
  );
};

const Version = async () => {
  const metadata = await prisma.metadata.findUniqueOrThrow({
    where: {
      key: "version",
    },
  });
  const version = zVersion.parse(metadata.value);
  return `v${version}`;
};
