yarn dlx create-turbo@latest -e with-vite
npm init -y (run this in api for initiate npm)
yarn add typescript tsx -D
yarn workspace api add express (install anything in api worksspace)
yarn workspace api add express -D
yarn workspace @repo/db db-generate
yarn workspace @repo/db db-migrate -- --name "initial"
yarn workspace @repo/db db-seed
yarn workspace @repo/db db-reset