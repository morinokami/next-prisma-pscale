import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Head from "next/head";

import AddContactForm from "../components/AddContactForm";
import ContactCard from "../components/ContactCard";
import { Contact } from "../types";

interface Props {
  initialContacts: Contact[];
}

const Index: NextPage<Props> = ({ initialContacts }) => {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <>
      <Head>
        <title>Contacts App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <section className="w-1/3 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add a Contact</h2>
          </div>
          <AddContactForm
            onSubmit={async (data, e) => {
              try {
                setContacts([...contacts, data]);
                e?.target.reset();
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Contacts</h2>
          </div>
          {contacts.map((c: any, i: number) => (
            <div className="mb-3" key={i}>
              <ContactCard contact={c} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialContacts: [
        {
          id: "1",
          firstName: "Shinya",
          lastName: "Fujino",
          email: "shf0811@gmail.com",
          avatar: "https://github.com/morinokami.png",
        },
      ],
    },
  };
};

export default Index;
