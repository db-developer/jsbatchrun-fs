[[ BACK (to readme.md)]](../README.md) &nbsp; [[ API ]](api.index.md) &nbsp;
[[ Contributing ]](contributing.md) &nbsp; [[ Frameworks ]](frameworks.md)
## jsbr fs clean &lt;options&gt; [directories] ##
<blockquote>
  <p>Remove one or more files or directories from one or more (project) directories.</p>

  <table border=0 width=100%>
    <tr><th colspan="3"><b>format</b></th></tr>
    <tr><th colspan="3">&gt; jsbr fs clean &lt;options&gt; [directories]</th></tr>
    <tr><th colspan="3"><b>mandatory option</b></th></tr>
    <tr><td>--file</td>
        <td style="text-align:center">string</td>
        <td>relative path of a filename or a directory<br />
            <ul><li>this option may be added multiple times.</li>
                <li>this option allows all globbing patterns from
                    <a href="https://www.npmjs.com/package/grunt-contrib-clean">grunt-contrib-clean</a>
                    </li></ul>
        </td>
        </tr>
    <tr><th colspan="3"><b>substituting options</b> (will substitute valid options)</th></tr>
    <tr><td>--env:opt:[optionname][propertyname]</td>
        <td style="text-align:center">boolean</td>
        <td>read property 'propertyname' and pass its value to <code>jsbr fs clean</code> using option '--optionname'<br />
            Example: --env:opt:file:foo (with foo: "/var/tmp/fun") => --file "/var/tmp/fun"</td>
        </tr>
    <tr><th colspan="3"><b>additional options</b> (will extend the arguments iterated by <code>jsbr fs clean</code>)</th></tr>
    <tr><td>--env:args:use:[propertyname]</td>
        <td style="text-align:center">boolean</td>
        <td>read the arguments (directories) from property 'propertyname'</td>
        </tr>
    <tr><td>--env:args:append:[propertyname]</td>
        <td style="text-align:center">boolean</td>
        <td>read the arguments (directories) from property 'propertyname' and append them to existing arguments.</td>
        </tr>
    <tr><td>--env:args:prepend:[propertyname]</td>
        <td style="text-align:center">boolean</td>
        <td>read the arguments (directories) from property 'propertyname' and prepend them to existing arguments.</td>
        </tr>
    <tr><th colspan="3"><b>additional options</b> (will narrow the arguments iterated by <code>jsbr fs clean</code>)</th></tr>
    <tr><td>--args:from</td>
        <td style="text-align:center">integer</td>
        <td>start cleaning task at and including this position, in the list of directories (arguments)</td>
        </tr>
    <tr><td>--args:to</td>
        <td style="text-align:center">integer</td>
        <td>stop cleaning task at and including this position, in the list of directories (arguments)</td>
        </tr>
    <tr><td>--args:index</td>
        <td style="text-align:center">integer</td>
        <td>run cleaning task (only!) for this position, in the list of directories (arguments)<br />
            (will override any ranges set by --args:from and --args:to)</td>
        </tr>
    <tr><th colspan="3"><b>special options</b></th></tr>
    <tr><td>--debug</td>
        <td style="text-align:center">boolean</td>
        <td>display debug information</td>
        </tr>
    <tr><td>--help</td>
        <td style="text-align:center">boolean</td>
        <td>display help for command <code>jsbr fs clean</code></td>
        </tr>
  </table>      

  <p><b>examples:</b></p>
  <br />

  <p>
    Remove [ "package-lock.json", "node_modules/" ] from project located at ~/projects/project-01  <br />
    <ul><li> removes file ~/projects/project-01/package-lock.json</li>
        <li> removes directory ~/projects/project-01/node_modules/ and all of its subdirectories.</li></ul>

  ```bash
  > jsbr fs clean --file package-lock.json --file "node_modules/" ~/projects/project-01
  ```
  </p>
  <p>
    Remove [ "package-lock.json", "node_modules/" ] from each and every project directory passed in as argument:  <br />
    <ul><li>~/projects/project-00</li>
        <li>~/projects/project-01</li>
        <li>~/projects/project-02</li>
        <li> ... (and more)</li></ul>

  ```bash
  > jsbr fs clean --file package-lock.json --file "node_modules/" ~/projects/project-00 ~/projects/project-01 ~/projects/project-02 ...
  ```
  </p>
  <p>
  Remove [ "package-lock.json", "node_modules/" ] from the following project directories passed in as argument:  <br />
  <ul><li>~/projects/project-07</li>
      <li>~/projects/project-08</li>
      <li>~/projects/project-09</li>
      <li>~/projects/project-10</li>
      <li>~/projects/project-11</li>
      <li>~/projects/project-12</li></ul>

  Note: This assumes you have been passing in project-00 to at least project-12 via arguments

  ```bash
  > batchrun fs clean --file package-lock.json --file "node_modules/" --args:from 7 --args:to 12 ~/projects/project-00 ~/projects/project-01 ~/projects/project-02 ...
  ```
  </p>
  <p>
  Remove [ "package-lock.json", "node_modules/" ] from the following project directory passed in among arguments:  <br />
  <ul><li>~/projects/project-03</li></ul>

  Note: This assumes you have been passing in project-00 to at least project-03 via arguments

  ```bash
  > batchrun fs clean --file package-lock.json --file "node_modules/" --args:index 3 ~/projects/project-00 ~/projects/project-01 ~/projects/project-02 ...
  ```
  </p>
  <p>
  Remove [ "package-lock.json", "node_modules/" ] from all directories specified by environment property 'directories'  <br />
  Note: This will fail, if any arguments (directories) are specified!<br />
  See: jsbatchrun working with configuration files. (TODO:link this)

  ```bash
  > batchrun fs clean --file package-lock.json --file "node_modules/" --env:args:use:projectdirs
  ```
  </p>
  <p>
  Remove [ "package-lock.json", "node_modules/" ] from all directories specified by environment property 'directories' and from any directory passed in as argument  <br />
  This will append all directories of array 'projectdirs' to the end of the list of arguments (after 'project-BB')<br />
  See: jsbatchrun working with configuration files. (TODO:link this)

  ```bash
  > batchrun fs clean --file package-lock.json --file "node_modules/" --env:args:append:projectdirs ~/projects/project-AA ~/projects/project-BB
  ```
  </p>
  <p>
  Remove [ "package-lock.json", "node_modules/" ] from all directories specified by environment property 'directories' and from any directory passed in as argument  <br />
  This will prepend all directories of array 'projectdirs' to the start of the list of arguments (before 'project-AA')<br />
  See: jsbatchrun working with configuration files. (TODO:link this)

  ```bash
  > batchrun fs clean --file package-lock.json --file "node_modules/" --env:args:append:projectdirs ~/projects/project-AA ~/projects/project-BB
  ```
  </p>
</blockquote>
