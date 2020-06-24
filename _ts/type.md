## Define types
- Define a type
```
  type a = string;

  type UserTy = {
    name: string
    age: number
  };

  // function
  type SetUserTy = (name: string, age: number) => void;


  type OriginalType = {[K:string]: string[]};
  type NewType= {[K:string]: number};
```
- Define a type based on the key and value of object
```
  const codonProtein = {
    AUG: "Methionine",

    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
  } as const; 

  // type based on the key of object
  type TranslatableCodon = keyof typeof codonProtein;

  // type based on the value of object
  type Protein = typeof codonProtein[TranslatableCodon];
```

- Mege two types
```
  type StopCodon = 'UAA'| 'UAG'| 'UGA';

  type Codon = StopCodon | TranslatableCodon
```