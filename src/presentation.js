// Import React
import React from "react";
import xs from "xstream";
import { render } from "react-dom";
import { h, makeComponent } from "@cycle/react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Appear,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Fill,
  Layout
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import angularImage from "./assets/angular2.png";
import banksyCompositionImage from "./assets/banksy-composition.jpg";
import compositionImage from "./assets/composition.png";
import cyclejsLogoImage from "./assets/cyclejs-logo.png";
import driverImage from "./assets/driver.jpg";
import drupalImage from "./assets/drupal.png";
import elmImage from "./assets/elm.png";
import foldImage from "./assets/fold.jpg";
import flatImage from "./assets/flat.jpg";
import liftImage from "./assets/lift.jpg";
import mapImage from "./assets/map.jpg";
import flipflopsImage from "./assets/flipflops.jpg";
import parisImage from "./assets/paris.jpg";
import pseudointellectualismImage from "./assets/pseudointellectualism.png";
import stockholmImage from "./assets/stockholm.jpg";
import simpleMadeEasyImage from "./assets/simple-made-easy.jpg";
import reactImage from "./assets/react.png";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

function main(sources) {
  const inc = Symbol();
  const inc$ = sources.react.select(inc).events("click");

  const count$ = inc$.fold(count => count + 1, 0);

  const vdom$ = count$.map(i =>
    h("div", [h("h1", `Counter: ${i}`), h("button", { sel: inc }, "Increment")])
  );

  return {
    react: vdom$
  };
}

const HelloImACycling = makeComponent(main);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} bold>
            Disclaimer
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={2} fit bold>
            The Content Of This Talk Is A Satire And Does Not Intend To Offend
            Anything Or Anyone
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <Appear>
              <span>Personal</span>
            </Appear>{" "}
            Development Experience
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              A satirical reflection on Cycle.js
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["fade"]}>
          <HelloImACycling />
        </Slide>

        <Slide
          transitionIn={["zoom", "fade"]}
          transitionOut={["slide", "fade"]}
          bgColor="primary"
        >
          <CodePane
            lang="jsx"
            theme="light"
            source={`
function main(sources) {
    const inc = Symbol();
    const inc$ = sources.react.select(inc).events("click");

    const count$ = inc$.fold(count => count + 1, 0);

    const vdom$ = count$.map(i =>
      h("div", [h("h1", \`Counter: \${i}\`), h("button", { sel: inc }, "Increment")])
    );

    return {
        react: vdom$
    };
}
    
<Slide transition={["fade"]}>
    <HelloImACycling />
</Slide>
            `}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            This talk is about
          </Text>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              the fact that it took me 3 eyars to understand Cycle.js
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              discovering a miracle of composition
            </Text>
          </Appear>
        </Slide>

        <Slide bgImage={banksyCompositionImage} />

        <Slide transition={["fade"]}>
          <Image width="80%" src={drupalImage} />
          <Appear>
            <Text>3 years in psychotronic jail</Text>
          </Appear>
        </Slide>

        <Slide transition={["fade"]}>
          <Image width="80%" src={compositionImage} />
        </Slide>

        <Slide bgImage={stockholmImage} />

        <Slide transition={["fade"]}>
          <Image width="80%" src={elmImage} />
        </Slide>

        <Slide transition={["fade"]}>
          <Image width="40%" src={cyclejsLogoImage} />
        </Slide>

        <Slide bgImage={driverImage} />

        <Slide bgImage={flatImage} />

        <Slide bgImage={liftImage} />
        
        <Slide bgImage={foldImage} />

        <Slide bgImage={mapImage} />

        <Slide bgImage={flipflopsImage} />

        <Slide transition={["fade"]}>
          <Image width="80%" src={angularImage} />
        </Slide>

        <Slide bgImage={parisImage} />

        <Slide transition={["fade"]}>
          <Image width="80%" src={reactImage} />
        </Slide>

        <Slide bgImage={simpleMadeEasyImage} />

        <Slide transition={["fade"]}>
          <Image src={pseudointellectualismImage} />
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Our Tools Shape Us
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>
            Layers of Correctness
          </Heading>
          <Layout>
            <Fill>
              <Appear fid={1}>
                <Heading
                  size={6}
                  caps
                  textColor="secondary"
                  bgColor="white"
                  margin={10}
                >
                  Computer
                </Heading>
              </Appear>

              <Appear fid={2}>
                <Text size={6} textColor="secondary">
                  Does computer <Text bold>understand</Text> what we want?
                </Text>
              </Appear>
            </Fill>

            <Fill>
              <Appear fid={1}>
                <Heading
                  size={6}
                  caps
                  textColor="secondary"
                  bgColor="white"
                  margin={10}
                >
                  Human
                </Heading>
              </Appear>

              <Appear fid={2}>
                <Text size={6} textColor="secondary">
                  Does computer <Text bold>do</Text> what we want?
                </Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]}>
          <List>
            <Appear>
              <ListItem>PHP</ListItem>
            </Appear>

            <Appear>
              <ListItem>Excel</ListItem>
            </Appear>

            <Appear>
              <ListItem>jQuery</ListItem>
            </Appear>

            <Appear>
              <ListItem>C#</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            What is the similarity between those?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} textColor="secondary">
            💲
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            It's important to borrow good ideas from other successful
            technologies
          </Heading>
          <Appear>
            <Text size={3}>It is also important to be consistent</Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} lineHeight={1} textColor="secondary">
            Why Functional Programming jokes are not funny?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} lineHeight={1} textColor="secondary">
            Because there are no Side-effects
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} lineHeight={1} textColor="secondary">
            Why the Functional Programming joke is not funny the second time?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} lineHeight={1} textColor="secondary">
            It is immutable
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            How can I contribute to Cycle.js?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]}>Callbags 👜</Slide>

        <Slide transition={["zoom"]}>Callbucks 💸</Slide>

        <Slide>
          <Heading>Thanks!</Heading>
          <Appear>
            <Text>https://github.com/halfzebra</Text>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
