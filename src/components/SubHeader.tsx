"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";
import { routes } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const SubHeader = () => {
  const pathname = usePathname() ?? "";
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll down
        setIsVisible(false);
      } else {
        // Scroll up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <div
        className={styles.position}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Flex
          fitHeight
          position="unset"
          className={styles.position}
          as="header"
          zIndex={9}
          padding="8"
          horizontal="center"
          data-border="rounded"
        >
          {/* Left spacer */}
          <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s" />

          {/* Center toggle buttons */}
          <Flex horizontal="center">
            <Flex
              background="page"
              border="neutral-alpha-weak"
              radius="m-4"
              shadow="m"
              padding="4"
              zIndex={1}
            >
              <Flex gap="4" vertical="center" textVariant="body-default-s">
                {routes["/work"] && (
                  <>
                    <ToggleButton
                      className="s-flex-show"
                      prefixIcon="all"
                      href="/work"
                      selected={pathname === "/work"}
                    />
                    <ToggleButton
                      className="s-flex-hide"
                      prefixIcon="all"
                      href="/work"
                      selected={pathname === "/work"}
                    />
                  </>
                )}
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                <Flex gap="4" vertical="center" textVariant="body-default-s">
                  {routes["/work/ai"] && (
                    <>
                      <ToggleButton
                        className="s-flex-hide"
                        prefixIcon="brain"
                        href="/work/ai"
                        label="AI/ML"
                        selected={pathname.startsWith("/work/ai")}
                      />
                      <ToggleButton
                        className="s-flex-show"
                        prefixIcon="brain"
                        href="/work/ai"
                        selected={pathname.startsWith("/work/ai")}
                      />
                    </>
                  )}
                  {routes["/work/robotics"] && (
                    <>
                      <ToggleButton
                        className="s-flex-hide"
                        prefixIcon="robot"
                        href="/work/robotics"
                        label="Robotics"
                        selected={pathname === "/work/robotics"}
                      />
                      <ToggleButton
                        className="s-flex-show"
                        prefixIcon="robot"
                        href="/work/robotics"
                        selected={pathname === "/work/robotics"}
                      />
                    </>
                  )}
                  {routes["/work/se"] && (
                    <>
                      <ToggleButton
                        className="s-flex-hide"
                        prefixIcon="laptop"
                        href="/work/se"
                        label="Software Engineering"
                        selected={pathname.startsWith("/work/se")}
                      />
                      <ToggleButton
                        className="s-flex-show"
                        prefixIcon="laptop"
                        href="/work/se"
                        selected={pathname.startsWith("/work/se")}
                      />
                    </>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* Right spacer */}
          <Flex fillWidth horizontal="end" vertical="center">
            <Flex
              paddingRight="12"
              horizontal="end"
              vertical="center"
              textVariant="body-default-s"
              gap="20"
            >
              {/* Future right-side content (e.g., ThemeToggle) */}
            </Flex>
          </Flex>
        </Flex>
      </div>
    </>
  );
};
