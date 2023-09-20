import { Typewriter } from "react-simple-typewriter";
import Layout from "@/components/Layout";
import Text from "@/components/Text";

export default function Home() {
  return (
    <Layout>
      <div className="h-full">
        <div className="w-full">
          <h1 className="text-2xl text-yellow-600">
            I am{" "}
            <span>
              <Typewriter
                words={["a Frontend", "a Backend", "an UI", "a Photographer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <div className="text-black">
            <Text age={12} color={12}>
              <div>
                <div>
                  <span>Welcome</span>
                </div>
              </div>
            </Text>
            <Text title="Hello-2" age={12} />
            <Text title="Hello-3" age={12} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
