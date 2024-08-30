import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function AddNewInterview() {
  return (
    <>
    <div className=' flex items-center justify-center font-bold cursor-pointer w-[200px] h-[80px] p-2 rounded-lg border border-black bg-secondary hover:shadow-lg transition ease-in '>
      + Add New Interview
    </div>
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</>

  )
}

export default AddNewInterview