/**
 * CSS Modules type definitions
 * 
 * This file provides TypeScript type definitions for CSS Modules.
 * It allows TypeScript to understand imports of .module.css files
 * and provides type safety for CSS class names.
 */

declare module '*.module.css' {
  /**
   * Interface for CSS Modules
   * 
   * This interface represents the structure of imported CSS modules.
   * Each property is a CSS class name from the module.
   */
  interface CSSModuleClasses {
    [key: string]: string;
  }
  
  const classes: CSSModuleClasses;
  export default classes;
}