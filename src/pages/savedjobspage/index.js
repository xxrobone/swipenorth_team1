import SavedJobs from '@/components/savedJobs/savedJobs.jsx';
import SavedJobsLayout from '@/components/layout/SavedJobsLayout'


export default function SavedJobsPage() {
  return (
    <>
      <main>
        <SavedJobs />
      </main>
    </>
  );
}
SavedJobsPage.Layout = SavedJobsLayout;