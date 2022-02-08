declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module 'next-mdx-remote/hydrate' {
  function hydrate(): void;
  export default hydrate;
}
declare module 'next-auth/client';
