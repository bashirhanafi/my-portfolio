import React from "react";
import { Carousel } from "@once-ui-system/core";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Posts2 } from "@/components/skills/Posts"
import { Projects2 } from "@/components/work/Projects2"
import { Projects } from "@/components/work/Projects"
import Marquee from "react-fast-marquee";
import { SkillPill } from "@/components/SkillPill";


export default function Home() {

  return (
    
    <Column maxWidth="m" gap="m" horizontal="center">
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="m">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="1">{"Ready to innovate"}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="16">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
          <Flex gap="12" vertical="start">
            {/* <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {"About me"}
              </Flex>
            </Button> */}
            <Button
              id="about1"
              data-border="rounded"
              href="/work"
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {"Explore Projects"}
              </Flex>
            </Button>
            <Button
              id="about2"
              data-border="rounded"
              href="https://google.com"
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {"Download CV"}
              </Flex>
            </Button>
          </Flex>
          </RevealFx>
        </Column>
      </Column>
      {/* {routes["/work"] && (
        <Flex fillWidth gap="12" mobileDirection="column">
          <Flex flex={3} paddingX="20">
            <Projects2 range={[1,1]} />
          </Flex>
        </Flex>
      )} */}

      <Flex
          align="center"
          style={{
            flexWrap: "wrap",
            maxWidth: "1024px",
            margin: "0 auto",
            padding: "40px 20px",
            gap: "48px",
            boxSizing: "border-box",
          }}
        >
<Column
  style={{
    flex: "0 0 220px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <RevealFx>
    <img
      src="/images/avatar.jpg"
      alt="Foto Profil"
      style={{
        width: "100%",
        maxWidth: "200px",
        borderRadius: "50px",
        objectFit: "cover",
        aspectRatio: "1 / 1",
        border: "3px solid white",
      }}
    />
  </RevealFx>
</Column>


  {/* Teks */}
  <Column
    align="left"
    style={{
      flex: "1",
      minWidth: "280px",
      paddingLeft: "8px",
      paddingRight: "8px",
      boxSizing: "border-box",
    }}
  > <RevealFx>
    <Heading as="h2" variant="display-strong-xs" style={{ marginBottom: "16px" }}>
      About me 
    </Heading>
    </RevealFx>
    <RevealFx>
    <Text variant="heading-default-m" style={{ lineHeight: 1.6, marginBottom: "12px" }}>
      A computer science graduate who looking forward becoming Software AI Engineer.
      Enjoy building things with 'intelligence', ranging from web development to application development.
      My work has focused on real-world challenges in areas such as tourism, education, agriculture, and disaster response. I’m passionate about using technology to develop meaningful and innovative solutions.
    </Text>
    </RevealFx>
    
  </Column>
</Flex>


      <Flex flex={1} paddingLeft="l" paddingTop="48">
            <Heading as="h3" variant="display-strong-xs" wrap="balance">
              Recent works
            </Heading>
      </Flex>
      {routes["/work"] && (
        <Flex fillWidth gap="12" mobileDirection="column">
        <Column maxWidth="m" horizontal="center" paddingY="8" paddingX="20">
          <Projects range={[1, 3]} />
        </Column>
        </Flex>
      )}
      {routes["/blog"] && (
        <Flex fillWidth gap="12" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              What can i offers?
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts2 range={[1, 6]} columns="3" />
          </Flex>
        </Flex>
      )}
      <Flex flex={1} paddingLeft="l" paddingTop="24" paddingBottom="20">
            <Heading as="h3" variant="display-strong-xs" wrap="balance">
              Skills
            </Heading>
      </Flex>
      <Marquee direction="right" speed={30} gradient={false} pauseOnHover>
        <SkillPill label="Software Engineering"/>
        <SkillPill label="Database System"/>
        <SkillPill label="Prediction"/>
        <SkillPill label="Natural Language Processing"/>
        <SkillPill label="Generative AI"/> 
        <SkillPill label="Recommender System"/> 
        <SkillPill label="Computer Vision"/>
        <SkillPill label="Machine Learning"/>
        <SkillPill label="Design and System Analysis"/>
        <SkillPill label="Reinforcement Learning"/>
        <SkillPill label="Transformers"/>      
        <SkillPill label="Classification"/>  
        <SkillPill label="Clustering"/>
        <SkillPill label="Association"/>
        <SkillPill label="SPSS"/>                 
      </Marquee>
      <Marquee speed={30} gradient={false} pauseOnHover>
        <SkillPill label="TensorFlow"/>
        <SkillPill label="Python"/>
        <SkillPill label="OpenCV"/>
        <SkillPill label="scikit-learn"/>
        <SkillPill label="HuggingFace Transformers"/>
        <SkillPill label="Pandas"/>
        <SkillPill label="NumPy"/>      
        <SkillPill label="Matplotlib"/>
        <SkillPill label="seaborn"/> 
        <SkillPill label="R"/>
        <SkillPill label="NTLK"/>                                                        
      </Marquee>
      <Marquee direction="right" speed={30} gradient={false} pauseOnHover>
        <SkillPill label="Git/GitHub"/>
        <SkillPill label="HTML"/>
        <SkillPill label="CSS"/>
        <SkillPill label="JavaScript"/>
        <SkillPill label="Next.js"/>
        <SkillPill label="React"/>  
        <SkillPill label="Dart"/>
        <SkillPill label="Node.js"/>
        <SkillPill label="Bootstrap"/>
        <SkillPill label="Java"/>
        <SkillPill label="Express.js"/>
        <SkillPill label="FastAPI"/>
        <SkillPill label="Flask"/>
        <SkillPill label="SQL"/>
        <SkillPill label="Google BigQuery"/>
        <SkillPill label="Postman API"/>            
      </Marquee>
      <Flex paddingTop="64" fillWidth gap="24" mobileDirection="column">
      </Flex>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      <Flex fillWidth gap="24" mobileDirection="column">
      </Flex>
    </Column>
  );
}
