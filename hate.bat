
: Made with love <3 (nohomo tho) by matt :3
@echo off

: Keep these as they are
set LINES=                                                          ~*~
set PREFIX=!
set TOKEN=insert-your-token
set STREAMING_NAME=hate

: You could change these tho if you want
set YOU=%username% $
set TITLE=hatebot by matt @constitute on github

title %TITLE% 

if exist hate.js (
    if exist commands (
        if exist events (
            if exist config.json (
                if exist node_modules (
                    (
                    echo @echo off
                    echo title hatebot by matt @constitute on github
                    echo color 4
                    echo node hate.js
                    echo pause >NUL
                    ) >> start.bat
                    start start.bat && del %~nx0 && exit
                ) else (
                    npm i discord.js && npm i snekfetch && npm i enmap && npm i fs
                    start %~nx0 && exit
                )
            ) else (
                cls && color 4 && title %TITLE% [Step 1/3]
                    echo.
                        echo %LINES%
                        echo                                                        Default: %PREFIX%
                        echo                                                      Enter a prefix
                        echo %LINES%
                    echo.
                set /p "PREFIX=%YOU% "
                cls && color 6 && title %TITLE% [Step 2/3]
                    echo.
                        echo %LINES%
                        echo                                                Default: %TOKEN%
                        echo                               Paste in your token below. Don't forget to remove the quotes
                        echo %LINES%
                    echo.
                set /p "TOKEN=%YOU% "
                cls && color 2 && title %TITLE% [Step 3/3]
                    echo.
                        echo %LINES%
                        echo                                                      Default: %STREAMING_NAME%
                        echo                                         Enter a username for your streaming link.
                        echo %LINES%
                    echo.
                set /p "STREAMING_NAME=%YOU% "
            )
        ) else (
            color 4 && echo You're missing the events folder && pause >NUL && exit
        )
    ) else (
        color 4 && echo You're missing the commands folder && pause >NUL && exit
    )
) else (
    color 4 && echo You're missing hate.js && pause >NUL && exit
)

: Creating the config.json
(
echo {
echo     "prefix": "%PREFIX%",
echo     "token": "%TOKEN%",
echo     "STREAMING_NAME": "%STREAMING_NAME%"
echo }
) >> config.json

start %~nx0 && exit