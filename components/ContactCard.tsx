import Image from "next/image";

import { Contact } from "../types";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = (props: ContactCardProps) => {
  return (
    <div className="border rounded-lg p-4 flex">
      <div className="my-auto">
        <Image
          src={props.contact.avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {props.contact.firstName} {props.contact.lastName}
        </p>
        <p className="text-gray-500">{props.contact.email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
