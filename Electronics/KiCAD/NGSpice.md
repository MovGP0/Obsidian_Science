[NGSpice](https://ngspice.sourceforge.io/) is the SPICE simulator used by KiCad's simulation workflow.

### Windows

Chocolatey is a quick install option:

```powershell
choco install ngspice -y
ngspice -v
```

The Chocolatey package may lag behind the latest upstream NGSpice release. For the latest Windows binary, use the official downloads:

Download the current Windows binary package from the official NGSpice download page:

- [NGSpice downloads](https://ngspice.sourceforge.io/download.html)
- [NGSpice packages](https://ngspice.sourceforge.io/packages.html)

After extracting or installing NGSpice, add the folder containing `ngspice.exe` to `PATH`, then verify it from PowerShell:

```powershell
ngspice -v
```

If KiCad does not find NGSpice automatically, configure the simulator path in KiCad's preferences or run simulations from a terminal where `ngspice.exe` is already on `PATH`.

### WSL / Ubuntu

```bash
sudo apt update
sudo apt install ngspice
ngspice -v
```

### macOS

```bash
brew install ngspice
ngspice -v
```
