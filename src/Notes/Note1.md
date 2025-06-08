📌 Suspense kya hota hai?
React mein Suspense ek component hai jo aapko React.lazy se load hone wale components ya asynchronous data fetching ke dauraan ek fallback UI (jaise Loading... message ya spinner) dikhane ka option deta hai.

📖 Asaan bhaasha mein:
Jab tak koi cheez load ho rahi ho, tab tak jo bhi dikhana hai, wo Suspense ke fallback prop se dikhate hain.

📌 Syntax:
jsx
Copy
Edit
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
📌 Example: Component Lazy Loading ke saath
javascript
Copy
Edit
import React, { Suspense, lazy } from "react";

// Lazy load component
const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      
      <Suspense fallback={<div>Loading About Page...</div>}>
        <About />
      </Suspense>

    </div>
  );
}

export default App;
📝 Yahan kya hua:
About component ko lazy load kiya.

Jab tak About load hoga tab tak Suspense ke fallback mein Loading About Page... dikhega.

Jab load ho jayega tab actual About component render hoga.

📌 Data Fetching mein (React 18+)
React 18 se aap Suspense for Data Fetching bhi kar sakte ho. Lekin iske liye aapko ya to React Query ya use hook (server components mein) ka support chahiye.

📌 Kyun jaroori hai?
✅ Lazy loaded components ke liye
✅ Initial load fast banane ke liye
✅ User ko achha UX dene ke liye jab tak data ya component load ho raha ho

📌 Conclusion:
Jab bhi aap React.lazy ya koi asynchronous component/data la rahe ho, use Suspense ke andar wrap kar ke ek fallback UI dikhana best practice hai.

