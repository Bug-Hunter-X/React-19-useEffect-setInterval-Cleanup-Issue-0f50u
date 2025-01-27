```javascript
// In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval in React 18 and 19
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); 

    // Missing cleanup function
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
};
```