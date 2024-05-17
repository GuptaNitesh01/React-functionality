# React-functionality


tilda(~) : It is responsible for autoupdating till patch version of dependency 
2.12.0 < 2.13.0

caret(^) : It is responsible for autoupdating till minor version and patch version dependency
2.12.0 < 3.0.0

(*) : It is responsible for autoupdating major version, minor version and patch version of dependency

# environment of two types :
development environment and production environment

#packages:
1. parcel (dev dependency)
 => HMR : Hot Module Replacement => as soon as you save the code the changes will reflect without page reload.
 => Caching 
 => Development Server 
 => Development build and Production build
    :development build created by npx parcel index.html
    :produaction build created by npx parcel build index.html
=> Image Optimization 
=> Tree Shaking   => Remove the extra code or extra space 
=> Differential bundling 

# JSX
 => JSX   => React.createElement => HTML  (babel)

 # components
 => Function based components => latest one 
 => Class based components  => older one 

 # The Rules of JSX 
    1. Return a single root element :  
    To return multiple elements from a component, wrap them with a single parent tag.
    for example ,     
    <div>
  <h1>Hedy Lamarr's Todos</h1>                     
    <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
or still we can write in parent tag like a empty tag <> </>
This empty tag is called a Fragment

    2. Close all the tags 
    => just say that any tag which we are using that should be close 
     eg: <img>  :  <img/>
         <li>  orange </li>

    3. camelCase  most of the things! 
    => example : their names can't contain dashes or be reserved words like 'class'.
               : instead of stroke-width we have to write strokeWidth.
               : since class is a reserved word ,in react we have to write className.
               : named after corresponding DOM property. 


# JavaScript in JSX with Curly Braces:
=>JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

  =>use a value from JavaScript by replacing " and " with { and }
  eg: export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

# Using curly braces: A window into the JavaScript world :
JSX is a special way of writing JavaScript. That means it’s possible to use JavaScript inside it—with curly braces { }. The example below first declares a name for the scientist, name, then embeds it with curly braces inside the <h1>:
eg : export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}

# Using “double curlies”: CSS and other objects in JSX:
eg :    export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}


        