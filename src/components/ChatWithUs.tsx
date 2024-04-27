'use client';
import { Icon } from '@iconify/react/dist/iconify.js';

const ChatWithUs = () => {
  return (
    <a
      href="https://wa.me/+2347013623317"
      target="_blank"
      className="tw-fixed tw-bottom-7 tw-right-5 tw-z-20 tw-cursor-pointer"
      title="Chat with us"
    >
      <Icon icon="logos:whatsapp-icon" width={50} height={50} />
    </a>
  );
};

export default ChatWithUs;
