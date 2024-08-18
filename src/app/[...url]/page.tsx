import { redis } from "@/lib/radis";
import { ragChat } from "@/lib/rag-chat";
import ChatWrapper from "../components/ChatWrapper";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponent = url.map((component) =>
    decodeURIComponent(component)
  );
  return decodedComponent.join("/");
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value;
  const reconstructedtUrl = reconstructUrl({ url: params.url as string[] });
  const sessionId = (reconstructedtUrl + "--" + sessionCookie).replace(
    /\//g,
    ""
  );
  console.log(reconstructedtUrl);
  const isAlreadyExit = await redis.sismember("indexed-url", reconstructedtUrl);
  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });
  if (!isAlreadyExit) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedtUrl,
      config: { chunkOverlap: 10, chunkSize: 500 },
    });
    await redis.sadd("indexed-url", reconstructedtUrl);
  }
  return (
    <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
  );
};

export default Page;
