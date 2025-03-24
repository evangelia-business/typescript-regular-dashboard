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
// F. Make WidgetPreview (readonly id/title/size)  