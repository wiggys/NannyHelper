// The parent page is used to input the daily schedule for the nanny. And, it should send that schedule
// information to the nanny page.
import BasicFormValidation from "../Components/BasicFormValidation";
import Header from "./Header";
import Footer from "./Footer";

export const ParentPage = () => {
  return (
    <div class="flex flex-col h-screen justify-between bg-white">
      <Header />
      <BasicFormValidation />
      <Footer />
    </div>

  );
}


