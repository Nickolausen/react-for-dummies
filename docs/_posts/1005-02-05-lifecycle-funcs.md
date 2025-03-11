---
layout: post
---

## Ciclo di vita
#### Functional components

Simulato grazie all'hook `useEffect()`

1. **Mounting**: 
```
useEffect(() => {...}, [])
```

2. **Updating**: 
```
useEffect(() => {...}, [yourDependency])
```

3. **Cleanup**: per effettuare un'azione di terminazione (esempio: chiudere una connessione esterna), 
```
useEffect(() => { return () => {...} })
```