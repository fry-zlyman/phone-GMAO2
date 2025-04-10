{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.nodePackages.typescript
    pkgs.nodePackages.vite
    pkgs.nodePackages.react
    pkgs.nodePackages.react-dom
    pkgs.nodePackages.tailwindcss
    pkgs.nodePackages.postcss
    pkgs.nodePackages.autoprefixer
  ];
}