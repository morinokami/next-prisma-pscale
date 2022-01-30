# next-prisma-pscale

Next.js + Prisma + PlanetScale

## Set up

1. Create a PlanetScale database:

```sh
$ pscale db create <DATABASE_NAME> --region <REGION>
```

2. Create a development branch:

```sh
$ pscale branch create <DATABASE_NAME> <BRANCH_NAME>
```

3. Clone the repository:

```sh
$ git clone git@github.com:morinokami/next-prisma-pscale.git
```

4. Install the dependencies:

```sh
$ cd next-prisma-pscale
$ npm install
``` 

5. Edit `.env`:

```sh
$ vim .env
$ cat .env
DATABASE_URL = 'mysql://root@127.0.0.1:3309/<DATABASE_NAME>'
```

6. Connect to PlanetScale:

```sh
$ pscale connect <DATABASE_NAME> <BRANCH_NAME> --port 3309
```

7. Push Prisma schema to PlanetScale:

```sh
$ npx prisma db push
```

8. [Deploy development branch to production](https://docs.planetscale.com/tutorials/prisma-quickstart#deploy-development-branch-to-production)

9. [Create a deploy request](https://docs.planetscale.com/tutorials/prisma-quickstart#create-a-deploy-request)

10. Reconnect to PlanetScale:

```sh
$ pscale connect <DATABASE_NAME> main --port 3309
```

11. Run the app:

```sh
$ npm run dev
```

## Note

This app was created by extending [chenkie's work](https://github.com/chenkie/next-prisma).
