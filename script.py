import os

def create_shortcut(name, target_url):
    desktop = os.path.join(os.path.expanduser("~"), "Desktop")
    shortcut_path = os.path.join(desktop, f"{name}.url")

    with open(shortcut_path, "w") as f:
        f.write(f"[InternetShortcut]\nURL={target_url}\n")
    print(f"تم إنشاء الاختصار بنجاح على سطح المكتب: {name}")

create_shortcut("Google", "https://www.google.com")