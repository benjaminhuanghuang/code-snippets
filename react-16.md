## Memo
```
interface ItemProps {
  name: string;
  onClick: (name: string) => void;
}

const Item = memo(function Item(props: ItemProps) {
  const { name, onClick } = props;
  return (
    <div></div>
  );
});
```

## Fetch data using useState and useEffect
```
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("/rest/search?key=" + encodeURIComponent(searchKey))
      .then(res => res.json())
      .then(data => {
        const { result, searchKey: sKey } = data;

        if (sKey === searchKey) {
          setResult(result);
        }
      });
  }, [searchKey]);
```

