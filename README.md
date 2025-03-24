# TypeScript Dashboard Exercise

## 🎯 Purpose  
A hands-on exercise to **strengthen TypeScript skills** in a React context. The project intentionally contains:  
- 🚨 **Type errors** (missing types, incorrect inferences)  
- 📝 **Partial implementations** (complete the code)  
- 💡 **Guided comments** (instructions in each file)  

**Goal**: Fix all type issues and create a fully type-safe dashboard.

---

## 🧩 Files to Modify  
| File                | Key Challenges                              |
|---------------------|--------------------------------------------|
| `types.ts`          | Core type definitions + utility types      |
| `Alert.tsx`         | Props typing, discriminated unions         |
| `Chart.tsx`         | Data validation, event handlers            |
| `Dashboard.tsx`     | State management, type-safe updates        |

---

## 🛠️ Step-by-Step Exercises  

### 1. **`types.ts`**  
```typescript
// A. Define WidgetSize ('sm' | 'md' | 'lg')  
// B. Create Widget interface (id, title, size, type, data, timestamps)  
// C. Implement Alert discriminated union (error/warning/info)  
// D. Add ChartData (x: string|number, y: number)  
// E. Create WidgetUpdate (requires id/lastUpdated, optional others)  
```

### 2. **`Alert.tsx`** 

```typescript
// F. Make WidgetPreview (readonly id/title/size)  
// 1. Fix props type to use Alert from types.ts  
// 2. Type the onDismiss handler  
// 3. Add type narrowing for alert styles  
// 4. Why does `alert.id` error? Fix it.  
```

### 3. **`Chart.tsx`**
```typescript
// 1. Define props type (title, data, onUpdate)  
// 2. Validate data with a type guard  
// 3. Type the click handler's parameter  
// 4. Add error state for invalid data  
```

### 4. **`Chart.tsx`**
```typescript
// 1. Fix useState<Widget[]> and newWidget state  
// 2. Implement updateWidget using WidgetUpdate  
// 3. Add createdAt/updatedAt to new widgets  
// 4. Ensure type safety in the switch statement 
``` 

💡 Workflow Tips

1. Start with types.ts – Components depend on these.

2. Fix components in order: Alert → Chart → Dashboard.

