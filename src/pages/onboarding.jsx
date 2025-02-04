// page only visible to users who have not selected a role yet(while logging in for the first time). The page should have two buttons, one for candidates and the other for recruiters. When a user clicks on a button, the user's role should be updated in the Clerk user object and the user should be redirected to the appropriate page based on their role. If the user has already selected a role, they should be redirected to the appropriate page based on their role. The page should also display a loading spinner while the user object is being fetched.

import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { BarLoader } from 'react-spinners'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {
  const{ user, isLoaded } = useUser();
  const navigate = useNavigate();
  
  const handleRoleSelection = async (role) => {
    await user
      .update({
        unsafeMetadata:{ role },
      })
      .then(()=>{
        navigate(role === "recruiter" ? "/post-job" : "/jobs")
      })
      .catch((err) => {
        console.error( "Error updating the role:",err);
      });
  };

  useEffect(() => {
    if(user?.unsafeMetadata?.role){
      navigate(
        user?.unsafeMetadata?.role === "recruiter" ? "/post-job" : "/jobs"
      )
    }
  }, [user])

  if(!isLoaded){
    return <BarLoader classname="mb-4" width={"100%"} color="#36d7b7" />
  }
  

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a....
      </h2>
      <div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40' >
        <Button variant="blue" className="h-36 text-2xl" onClick={()=> handleRoleSelection("candidate")}>
          Candidate
        </Button>

        <Button variant="destructive" className="h-36 text-2xl" onClick={()=> handleRoleSelection("recruiter")}>
          Recruiter
        </Button>
      </div>
    </div>
  )
}

export default Onboarding