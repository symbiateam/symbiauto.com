import React, { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from '@/components/ui/alert-dialog';

const WaitlistDialog = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:contact@symbiauto.com?subject=New Waitlist Signup&body=New signup: ${email}`;
    setIsOpen(false);
    setEmail('');
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-white p-6 rounded-lg max-w-md mx-auto">
        <AlertDialogTitle className="text-2xl font-bold mb-4">Join our Waitlist</AlertDialogTitle>
        <AlertDialogDescription>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default WaitlistDialog;