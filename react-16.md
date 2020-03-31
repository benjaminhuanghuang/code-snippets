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

