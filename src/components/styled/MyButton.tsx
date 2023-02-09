import React from 'react';
import { motion } from 'framer-motion';

export function MyButton({
  isLoading,
  children,
}: {
  isLoading?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      className="h-10 w-full rounded-md bg-sky-400 p-2 text-white hover:bg-opacity-80"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        <motion.span
          className="inline-block h-5 w-5 rounded-full border-r-4 border-t-4 border-white"
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 1, repeat: Infinity }}
        />
      ) : (
        children
      )}
    </button>
  );
}
