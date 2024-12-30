import React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function WaitlistDialog({ isOpen, onClose }) {
  const [status, setStatus] = useState('');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-6">Join the Waitlist</h2>
        <form 
          action="https://formspree.io/f/mqaadzeo" 
          method="POST"
          onSubmit={() => setStatus('submitted')}
          className="space-y-6"
        >
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-4 text-lg rounded-lg border-2 border-gray-200 focus:border-cyan-400 focus:ring-cyan-400"
          />
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-md"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="px-6 py-3 bg-cyan-400 text-navy-900 hover:bg-cyan-300 rounded-md"
            >
              {status === 'submitted' ? 'Submitted!' : 'Submit'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}