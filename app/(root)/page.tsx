import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home"
}


const HomePage = () => {
  return ( 
    <div>
      <h1>Hello World</h1>
      {/* <Button>Click me</Button> */}
    </div>
  );
}
 
export default HomePage;