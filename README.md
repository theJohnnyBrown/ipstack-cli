# IPSTACK-CLI

A tool to access the IPStack API from the command line. Given an IPv4 address,
this program will print the latitude and longitude associated with that IP,
according to the IPStack API.

# Quickstart

If you already have docker installed, and have an IPStack Access Key, all you have to do is

    docker run -e ACCESS_KEY=<IPSTACK ACCESS KEY> thejohnnybrown/ipstack-cli:latest <IPADDRESS>

This will print the latitude and longitude from the given IP at the command line.

# Install

You will need an IPStack API key to use this program. This can be obtained for free from https://ipstack.com/

 + Clone this repository, then run `npm install` in this directory.
 + Set the environment variable ACCESS_KEY to your IPStack API Key
 + Run the command `npx tsx src/main.ts <IPADDRESS>`

# Docker

Pull the docker image with,

    docker run -e ACCESS_KEY=$ACCESS_KEY thejohnnybrown/ipstack-cli:latest <IPADDRESS>

Alternatively, clone this repository and build the docker image with the command,

    docker build -t ipstack-cli:latest .

Then, you can run the image as a container with the command,

    docker run -e ACCESS_KEY=$ACCESS_KEY ipstack-cli:latest <IPADDRESS>

Make sure your environment variable ACCESS_KEY is set.

# Security Considerations

## HTTPS NOT SUPPORTED FOR FREE ACCOUNTS

IPStack API does not permit https requests with a free plan. Not using HTTPS for
requests is a security risk as it exposes the content of requests to other nodes
on the network. This includes all data sent to and received from the server. It
would be unwise to use this API for any serious purpose without upgrading to a
plan which supports HTTPS.

## Security Information Returned from the IPStack API

Higher tiers of the IPStack API allow querying for security information, which
would allow us to determine risks associated with a given IP address.

## API Key Secrecy

The API Key is passed as an environment variable to avoid potentially leaking it
through logs, or the shell history.
