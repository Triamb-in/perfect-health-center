import { NextResponse } from "next/server";

export function GET() {
  const content = `# ads.txt for perfecthealthcenter.in
# Perfect Health Center does not host third-party programmatic advertisements or digital advertising sellers.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
