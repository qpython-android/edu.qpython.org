QSL4A - QPython's Android script layer
==============================================
SL4A is an acronym for Android's script layer, QSL4A is QPython's Android script layer.


What is SL4A?
----------
The full name of SL4A Scripting Layer for Android, as the name suggests is Android's script architecture layer, Its purpose is to develop Android applications using well-known scripting languages.Its working principle is based on RPC remote call, through the local script parser and the remote native Android server layer APK information exchange,That is to achieve a remote agent,The local script function calls is encapsulated by JSON format,pass to the Remote ECS APK and proceed to the actual android system function call,and the results of the operation will be fed back to the local script parser,finally the terminal will show the results of the operation.

QPython integrated support of SL4A, users can easily be invoked by Andrews characteristics Python code, by SL4A.


QSL4A supported interfaces
-------------------

You need to turn on the QPython permission settings in your Android system settings to use the associated SL4A interface.

**System application interface**

* Including clipboard, Intent object, broadcast, vibration, network status, version number, send mail, prompts, Input boxes, etc. `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html>`_
* Application: Mainly as an application management interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#applicationmanagerfacade>`_
* ActivityResult£ºIn Android control ActivityResult the interface of behavior `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#activityresultfacade>`_
* Common Intent£ºAccess two-dimensional code, Use XX application to view the interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#commonintentsfacade>`_

**Android related device interface**

* Camera£ºAccess & recall device's camera interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#camerafacade>`_
* Contact£ºContact access interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#contactsfacade>`_
* Location£ºAccess location interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#locationfacade>`_
* Phone: Access the phone interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#phonefacade>`_
* 
* Media recording: able to control recording or video `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#mediarecorderfacade>`_
* Sensor Management: Access Control & Sensor device `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#sensormanagerfacade>`_
* Settings: Ability to set device screen, flight mode, ringtone mode, vibration mode, volume, brightness, etc. `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#settingsfacade>`_
* SMS: equipment can be access to SMS `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#smsfacade>`_
* Speech recognition: Can recognize the user's speech and returns the most likely outcome `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#speechrecognitionfacade>`_
* Tone Generator: The ability to generate DTMF speech from a given phone number `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#tonegeneratorfacade>`_
* Wake lock: The device's wake lock interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#wakelockfacade>`_
* WIFI: Device WIFI Management `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#wififacade>`_
* Battery Management: Provides the device's battery management interface `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#batterymanagerfacade>`_
* Media Player: Media Player Settings `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#mediaplayerfacade>`_
* Preferences: Access / Control Preferences `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#preferencesfacade>`_
* Text Voice: Control text to voice output `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#texttospeechfacade>`_
* Bluetooth: Control Bluetooth devices on your phone `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#bluetoothfacade>`_
* Signal strength: access phone signal strength information `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#signalstrengthfacade>`_
* Webcam: A camera that controls the phone `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#webcamfacade>`_
* User interface: UI interface is used to control related exhibits, such as a text box, the password input box, the status bar, progress bar, date picker, etc. `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#uifacade>`_
* NFC: NFC related control, mainly provided in the NFC mode master/slave exchange information `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#nfc>`_
* USB Host Sequence: A device used to control USB-like sequences from Android that has a USB host controller `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#usb-host-serial-facade>`_


**QPython relevant interface**

* QPy interface: Run QPython script on your phone `(APIs Document) <http://www.qpython.org/en/guide_androidhelpers.html#qpyinterfacefacade>`_


Sample Code
-----------
In Android, you can import the androidhelper module to load QSL4A support.Let's run a simple QSL4A script to experience the following:


::

    ^0$import androidhelper
    ^0$droid = androidhelper.Android()
    ^0$line = droid.dialogGetInput()
    ^0$s = "Hello, %s" % (line.result,)
    ^0$droid.makeToast(line)


<button>Run ...</button>
