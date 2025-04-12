import { GROUPED_DOMAINS } from '@/lib/constants';

function getHostName(url: string) {
  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?([^:/\n?=]+)/im);
  return match && match.length > 1 ? match[1] : null;
}

export function Favicon({ domain, ...props }) {
  if (process.env.privateMode) {
    return null;
  }

  const hostName = domain ? getHostName(domain) : null;

  // 更新  ico  api
  // const src = hostName
  //   ? `https://icons.duckduckgo.com/ip3/${GROUPED_DOMAINS[hostName]?.domain || hostName}.ico`
  //   : null;
  const src = hostName
    ? `https://ico.n3v.cn/get.php?url=${GROUPED_DOMAINS[hostName]?.domain || hostName}`
    : null;

  return hostName ? <img src={src} width={16} height={16} alt="" {...props} /> : null;
}

export default Favicon;
