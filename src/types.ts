// 1. Fix these type definitions

// A. Define a WidgetSize type ('sm' | 'md' | 'lg')
// type WidgetSize = ...

// B. Define a WidgetType that can be 'chart', 'alert', or 'metric'
// type WidgetType = ...

// C. Create a Widget interface with:
// - id (string)
// - title (string)
// - size (WidgetSize)
// - type (WidgetType)
// - data (optional, can be any)
// interface Widget { ... }

// D. Create an Alert discriminated union with 3 variants:
// - error: { message: string, stack?: string }
// - warning: { message: string, code?: string }
// - info: { message: string, expiresAt?: Date }
// type Alert = ...

// E. Create a ChartData type with x (string|number) and y (number)
// interface ChartData { ... }