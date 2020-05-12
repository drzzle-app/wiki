# DNS Records
In the Manage DNS modal, users have the ability to add, delete and edit DNS records for their domains.

Having issues adding/editing records? Please reach out to us, we're here to help! ```support@drzzle.com```.


## Points To Values
The following formats are referring to the values entered in the "Points To" input. See below examples.

![Manage DNS Modal](./manage-dns-modal.png)

### A Record
A records should be entered in IPv4 format with dotted decimal notation.
```
192.0.2.1
```

### AAAA Record
AAAA records should be entered in IPv6 format with colon-separated hexadecimals.
```
2001:0db8:85a3:0:0:8a2e:0370:7334
```

### MX Record
MX records should always contain 2 values. The first is the priority and should be a number value (the lower the number the higher the priority). The second value is the domain name of the email server.
```
10 mail.example.com
```

If you need to add multiple MX records you can separate them with a comma. See example:
```
10 mail.example.com, 20 mail2.example.com
```

### TXT Record
TXT records have a more complex format. Typically they are one or more strings that are case sensitive. TXT values need to be enclosed in quotations ```"```. If you need to use double quotes _inside_ your string, you will need to prefix each with a backslash, like so ```\"```. Case is also preserved, so ```"Ab"``` and ```"aB"``` are different values.

A single string can include up to 255 characters, including the following:

- a-z
- A-Z
- 0-9
- Space
- (hyphen)
- ! " # $ % & ' ( ) * + , - / : ; < = > ? @ [ \ ] ^ _ \` { | } ~ .

Example:
```
"v=spf1 ip4:192.168.0.1/16 -all"
```

If you need to enter a value longer than 255 characters, break the value into strings of 255 characters or fewer, and enclose each string in double quotation marks ```"```.

Example:
```
"String 1" "String 2" "String 3"
```

### SRV Record
SRV records should contain four space-separated values. The first three values are numbers representing priority, weight, and port. The last value is a domain name.
```
10 5 80 hostname.example.com
```

## Host Values
The following formats are referring to the values entered in the "Host" input. See below examples.

![Manage DNS Modal](./manage-dns-host.png)

### CNAME Record
CNAME records should be entered in the domain name format. You cannot use a top node of a DNS namespace. For example ```mydomain.com``` doesn't work in the "Host" field but ```subdomain.mydomain.com``` will work.

Host
```
hostname.example.com
```

Points To Value
```
example.com
```
