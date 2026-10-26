const base = import.meta.env.BASE_URL;

export function siteUrl(path) {
  return path.startsWith("/") && !path.startsWith("//")
    ? `${base}${path.slice(1)}`
    : path;
}

export function pagePath(pathname) {
  const relative = pathname.startsWith(base)
    ? `/${pathname.slice(base.length)}`
    : pathname === base.slice(0, -1) ? "/" : pathname;
  return relative.replace(/\/+$/, "") || "/";
}
