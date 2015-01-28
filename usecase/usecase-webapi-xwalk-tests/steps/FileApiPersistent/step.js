var step = '<font style="font-size:85%">'
          +'<p>How to run(tizen-ivi only)</p>'
          +'<ol>'
            +'<li>Install wgt file on IVI.</li>'
            +'<li>Run config-device.sh script in testkit-lite package to run a web server.</li>'
            +'<li>Run test by testkit-lite, like below command.</li>'
            +'<li>testkit-lite -e "xwalk" -f $PWD/tests.xml -A --comm tizenmobile --testenvs "Launcher=app_launcher -s"</li>'
          +'</ol>'
          +'<p>Test purpose: </p>'
          +'<ol>'
            +'<li>Check that <a href="https://crosswalk-project.org/jira/browse/XWALK-3000">XWALK-3000</a> is fixed.</li>'
            +'<li>Check File API PERSISTENT is supported or not.</li>'
            +'<li>Note: need tinyweb support.</li>'
          +'</ol>'
          +'<p>Test step: </p>'
          +'<ol>'
            +'<li>Click "Create And Write" to create a persistent file and write.</li>'
            +'<li>Click "Read" to get content from the persistent file.</li>'
          +'</ol>'
          +'<p>Expected result: </p>'
          +'<p>Test passes if "PERSISTENT CONTENT" could be shown below after click "Read" button.</p>'
         +'</font>';
