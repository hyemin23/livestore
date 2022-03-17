export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export const payload = Math.floor(100000 + Math.random() * 900000) + "";
